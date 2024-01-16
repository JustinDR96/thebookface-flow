using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using BCrypt.Net;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;
        public AccountController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("register")] // POST api/account/register
        public async Task<ActionResult<AppUser>> Register([FromBody] AppUser user)
        {

            //pour hasher le mdp si il y en a
            var hashedPsswd = BCrypt.Net.BCrypt.HashPassword(user.Password);

            AppUser newUser = new AppUser
            {
                Id = user.Id,
                UserName = user.UserName,
                FirstName=user.FirstName,
                LastName = user.LastName,
                Email=user.Email,
                Password=hashedPsswd,
                // DateOfBirth = user.DateOfBirth,
            };
            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            return newUser;

        }

    }
}