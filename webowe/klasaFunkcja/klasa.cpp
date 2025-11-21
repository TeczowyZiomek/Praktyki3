#include <iostream>
#include <string>

using namespace std;

class book {
public:
    string title;
    string author;
    int year;

};

int main()
{
    book bookObj1;
    bookObj1.title = "Matilda,";
    bookObj1.author = "Roald Dahl,";
    bookObj1.year = 1988;

    book bookObj2;
    bookObj2.title = "The Giving Tree,";
    bookObj2.author = "Shel Silverstein,";
    bookObj2.year = 1964;

    cout << bookObj1.title << " " << bookObj1.author << " " << bookObj1.year << endl;
    cout << bookObj2.title << " " << bookObj2.author << " " << bookObj2.year << endl;
    return 0;
}


