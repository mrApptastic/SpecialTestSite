using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

    public class MatchGroup  
    {  
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int NumberOfCompetitors { get; set; }
    }  