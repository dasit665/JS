using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JavaScript.Models
{
    public class Client
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string EMail { get; set; }
        public string HashPassword { get; set; }

        public static IEnumerable<Client> GetClients()
        {
            IEnumerable<Client> Clients = new Client[]
            {
                new Client(){ID = 1, Name = "Ivan Alexandrov", EMail = "i.alexandrov@some.net", HashPassword = "qaz"},
                new Client(){ID = 2, Name = "Petr Pavlov", EMail = "p.pavlov@some.net", HashPassword = "wsx"},
                new Client(){ID = 3, Name = "Sergey Andreev", EMail = "s.andreev@some.net", HashPassword = "edc"},
                new Client(){ID = 4, Name = "Pavel Petrov", EMail = "p.pavlov@some.net", HashPassword = "rfv"},
                new Client(){ID = 5, Name = "Alexander Ivanov", EMail = "a.ivanov@some.net", HashPassword = "tgb"}
            };

            return Clients;
        }
    }
}
