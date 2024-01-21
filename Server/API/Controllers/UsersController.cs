using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Authorize]
public class UsersController : BaseApiController
{
    private readonly DataContext _context;

    public UsersController(DataContext context)
    {
        _context = context;
    }

    [AllowAnonymous]
    [HttpGet]
    public async Task<IEnumerable<AppUser>> GetUsers()
    {
        var users = await _context.Users.ToListAsync();
        return users;
    }

    [HttpGet("{id}")] // api/users/2
    public async Task<AppUser> GetUser(int id)
    {
        return await _context.Users.FindAsync(id);
    }


    // [HttpGet("{name}")] // api/users/2
    // public async Task<AppUser> GetUserName(string username)
    // {
    //     return await _context.Users.FindAsync(username);
    // }

}
