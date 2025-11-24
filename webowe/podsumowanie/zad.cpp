#include <iostream>
#include <ctime>
#include <cmath>
#include <string>
#include <cstdlib>

using namespace std;

int main()
{
    srand(time(0));

    int randomNum = rand() % 101;

    cout << randomNum;
    return 0;
}
