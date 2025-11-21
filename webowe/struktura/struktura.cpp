#include <iostream>
#include <string>
using namespace std;


   struct dane
   {
        string name;
        int age;
        char grade;
   };
int main()
{
    dane d1;

    d1.name = "Liam";
    d1.age = 35;
    d1.grade = 'A';

    cout << "Name: " << d1.name << endl;
    cout << "Age: " << d1.age << endl;
    cout << "Grade: " << d1.grade << endl;

}
