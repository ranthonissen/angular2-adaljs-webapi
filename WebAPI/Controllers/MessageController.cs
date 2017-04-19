using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "get")]
    [Authorize]
    public class MessageController : ApiController
    {
        private IList<Message> _messages = new List<Message>()
        {
            new Message { Id = 1, Title = "Lorem ipsum", Body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", PublishedAt = DateTime.Now},
            new Message { Id = 2, Title = "Pellentesque convallis", Body = "Pellentesque convallis finibus erat, sed lacinia eros mattis quis.", PublishedAt = DateTime.Now},
            new Message { Id = 3, Title = "Maecenas scelerisque", Body = "Maecenas scelerisque pretium risus, eu gravida elit porttitor id.", PublishedAt = DateTime.Now}
        };

        public IHttpActionResult Get(int id)
        {
            var message = _messages.FirstOrDefault(m => m.Id == id);

            if (message == null)
            {
                return NotFound();
            }

            return Ok(message);
        }
    }
}
