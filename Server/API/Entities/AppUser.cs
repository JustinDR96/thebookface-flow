using System.ComponentModel.DataAnnotations;

namespace API.Entities;

public class AppUser
{
    public int Id { get; set; }

    [Required]
    public string UserName { get; set; }

    [Required]
    public string FirstName { get; set; }

    [Required]
    public string LastName { get; set; }

    [Required]
    public string Email { get; set; }

    [Required]
    public string Password { get; set; }

    // public List<Post> Posts {get; set; } = new();

    
    public string ProfileImg {get; set; } = "https://thispersondoesnotexist.com/";

}
