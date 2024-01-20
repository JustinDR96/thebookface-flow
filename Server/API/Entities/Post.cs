using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{

    [Table("Posts")]
    public class Post
    {
        public int Id{ get; set; }

        [Required]
        public string TextContent{get;set;}

        public int Likes { get; set; } = 0;

        public string ImgUrl {get;set;}

        public int AppUserId {get; set; }

        // public AppUser AppUser { get; set; }
    }
}