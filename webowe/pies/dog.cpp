#include <iostream>

using namespace std;
class dog
{
public:
    void bark()
    {
        cout << "woof!";
    }
};
int main()
{
    dog myObj;
    myObj.bark();
    return  0;
}
