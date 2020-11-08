using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Competition: CompetitionView
   {  
       [Key]
       public int Id {get; set; }
       public bool Enabled { get; set; }
       public bool EnabledInWeb { get; set; }
   }  

   public class CompetitionView
   {  
       public Guid? EId { get; set; }  
       public string Name { get; set; }  
       public DateTime Start { get; set; }  
       public DateTime? End { get; set; } 
       public IEnumerable<MatchGroup> MatchGroups { get; set; }       
   }  