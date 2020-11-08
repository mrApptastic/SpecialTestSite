using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

    public class Match: MatchView  
    {  
        [Key]
        public int Id { get; set; }             
    }  

    public class MatchView {
        public Guid? EId { get; set; }
        public DateTime Date { get; set; } 
        public Person Red { get; set; }
        public Person Blue { get; set; }
        public bool Winner { get; set; }
        public int RedPoints {get; set; }
        public int BluePoints {get; set; }
        public DecisionType Decision { get; set; }
    } 