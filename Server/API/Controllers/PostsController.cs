using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    public class PostsController : BaseApiController
    {
        private readonly DataContext _context;

        public PostsController(DataContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<IEnumerable<Post>> GetAllPosts()
        {
            var posts = await _context.Posts.ToListAsync();
            return posts;
        }

        [HttpGet("{id}")] // api/Posts/2
        public async Task<Post> GetPost(int id)
        {
            return await _context.Posts.FindAsync(id);
        }

        [HttpPost("newpost")]
        public async Task<ActionResult<Post>> Posting(int userId,[FromBody] Post post)
        {
            var user = await _context.Users.FindAsync(userId);

            Post newPost = new Post
            {
                Id = post.Id,
                TextContent = post.TextContent,
                Likes=post.Likes,
                ImgUrl=post.ImgUrl,
                AppUserId=user.Id,
            };
            _context.Posts.Add(newPost);
            await _context.SaveChangesAsync();

            return newPost;
        }


    }
}
