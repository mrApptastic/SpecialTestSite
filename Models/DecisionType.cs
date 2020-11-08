using System;
using System.ComponentModel.DataAnnotations;

public class DecisionType  
   {  
       [Key]
       public int Id {get; set; }
       public string Name { get; set; }  
       public string Description { get; set; }  
       public int PointsWinner { get; set; }  
       public int PointsLoser { get; set; }
   }  