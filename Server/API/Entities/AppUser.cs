namespace API.Entities;

public class AppUser
{
    public int Id { get; set; }
    public string UserName{get;set;}
    public string FirstName{get;set;}
    public string LastName{get;set;}
    public string Email{get;set;}
    public string Password{get;set;}
    // public DateOnly DateOfBirth{get;set;}

    // public int GetAge(){
    //     return DateOfBirth.CalculateAge();
    // }

}
