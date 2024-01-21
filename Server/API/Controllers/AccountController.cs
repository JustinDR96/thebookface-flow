using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using API.Services;
using BCrypt.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly ITokenService _tokenService;
        public AccountController(DataContext context, ITokenService tokenService)
        {
            this._tokenService = tokenService;
            _context = context;
        }

        [HttpPost("register")] // POST api/account/register
        public async Task<ActionResult<UserDTO>> Register([FromBody] AppUser user)
        {
            if(await UserExists(user.UserName)){
                return BadRequest("Username is taken");
            }

            var hashedPsswd = BCrypt.Net.BCrypt.HashPassword(user.Password);

            AppUser newUser = new()
            {
                Id = user.Id,
                UserName = user.UserName.ToLower(),
                FirstName=user.FirstName,
                LastName = user.LastName,
                Email=user.Email,
                Password=hashedPsswd,
                // DateOfBirth = user.DateOfBirth,
            };
            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            return new UserDTO{
                Username = newUser.UserName,
                Token= _tokenService.CreateToken(newUser)
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDto loginDto){
            var user = await _context.Users.SingleOrDefaultAsync(x=>
            x.UserName==loginDto.UserName);

            if(user==null){return Unauthorized("Invalid username");}

            bool passwdMatches = BCrypt.Net.BCrypt.Verify(loginDto.Password,user.Password);
            if(!passwdMatches){
                return Unauthorized("Invalid password");
            }

            return new UserDTO{
                Username = user.UserName,
                Token=_tokenService.CreateToken(user)
            };
        }


        private async Task<bool> UserExists(string username){
            return await _context.Users.AnyAsync( x=>x.UserName== username.ToLower());
        }

    }
}