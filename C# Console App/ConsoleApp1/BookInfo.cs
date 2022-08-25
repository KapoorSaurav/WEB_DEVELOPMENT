using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class BookInfo
    {
        public virtual int Id { get; set; }

        private List<string> authors = new List<string>();
        public virtual List<string> Authors
        {
            get { return authors; }
            set { authors = value; }
        }
        
        public virtual string Title { get; set; }
        public virtual string Publisher { get; set; }
        public virtual int NumOfPages { get; set; }
    }
}
