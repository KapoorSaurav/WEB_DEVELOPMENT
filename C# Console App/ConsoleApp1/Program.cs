using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            const int IDPOSITION = 0;
            const int ATTRNAMEPOSITION = 1;


            List<BookInfo> bookList = new List<BookInfo>();
            ReadFromFile(IDPOSITION, ATTRNAMEPOSITION, bookList);
            Console.WriteLine("1. SearchByTitle 2. SearchByAuthor 3. SearchByPublisher 4. GetBookDetails 5. SearchByNumberOfPages");
            string num = Console.ReadLine();
            int option = Convert.ToInt32(num);
            string word = Console.ReadLine();

            GetResult(bookList, option, word);
            Console.ReadLine();
        }

        private static void GetResult(List<BookInfo> bookList, int option, string word)
        {
            switch (option)
            {
                case 1:
                    string x = string.Join(", ", bookList.Where(y => y.Title.Contains(word)).Select(z => z.Id));
                    Console.WriteLine(x);
                    break;
                case 2:
                    string x1 = string.Join(", ", bookList.Where(y => y.Authors.Contains(word)).Select(z => z.Id));
                    Console.WriteLine(x1);
                    break;
                case 3:
                    string x2 = string.Join(", ", bookList.Where(y => y.Publisher.Contains(word)).Select(z => z.Id));
                    Console.WriteLine(x2);
                    break;
                case 4:
                    BookInfo x3 = bookList.Where(y => y.Id == Convert.ToInt32(word)).FirstOrDefault();
                    string s = "Id: " + x3.Id + " Authors: " + string.Join(",", x3.Authors) + " Title: "+ x3.Title+" Publisher: "+ x3.Publisher;
                    Console.WriteLine(s);
                    break;
                case 5:
                    string x4 = string.Join(", ", bookList.Where(y => y.NumOfPages == Convert.ToInt32(word)).Select(z => z.Id));
                    Console.WriteLine(x4);
                    break;
            }
        }

        private static void ReadFromFile(int IDPOSITION, int ATTRNAMEPOSITION, List<BookInfo> bookList)
        {
            using (var bookInfoReader = new StreamReader(@"C:\ASSINGMENT\Projectdata.txt"))
            {
                while (!bookInfoReader.EndOfStream)
                {
                    bool existingBook = false;
                    BookInfo bookInfo;
                    var line = bookInfoReader.ReadLine();
                    var attributeInfo = line.Split('\t');
                    int.TryParse(attributeInfo[IDPOSITION], out int id);

      
                    if (id > 0)
                    {
                        bookInfo = bookList.Find(item => item.Id == id);

                        if (bookInfo == null || bookInfo.Id == 0)
                        {
                            existingBook = false;
                            bookInfo = new BookInfo();
                            bookInfo.Id = id;
                        }
                        else
                        {
                            existingBook = true;
                        }

                        if (attributeInfo[ATTRNAMEPOSITION] == AttributeName.Author.ToString())
                        {
                            bookInfo.Authors.Add(attributeInfo[2]);
                        }
                        else if (attributeInfo[ATTRNAMEPOSITION] == AttributeName.Publisher.ToString())
                        {
                            bookInfo.Publisher = attributeInfo[2];
                        }
                        else if (attributeInfo[ATTRNAMEPOSITION] == AttributeName.Title.ToString())
                        {
                            bookInfo.Title = attributeInfo[2];
                        }
                        else if (attributeInfo[ATTRNAMEPOSITION] == AttributeName.NumOfPages.ToString())
                        {
                            bookInfo.NumOfPages = int.Parse(attributeInfo[3]);
                        }

                        if (!existingBook) { bookList.Add(bookInfo); };
                    }
                }
            }
        }
    }
}
