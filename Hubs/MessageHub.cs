using Microsoft.AspNetCore.SignalR;  
using System.Threading.Tasks;  

namespace SpecialTestSite.Hubs  
{  
    public class MessageHub : Hub  
    {  
        public async Task NewMessage(Message msg)  
        {  
            await Clients.All.SendAsync("MessageReceived", msg);  
        }  
    }  
}  