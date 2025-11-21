#include <iostream>
#include <conio.h>
#include <windows.h>
#include <locale>
using namespace std;

int main() {

 setlocale(LC_CTYPE, "Polish");

    int x;
    int y;
    std::cout << "Wpisz pierwsz¹ liczbê:";
    cin >> x;
    std::cout << "Wpisz:";
    cin >> y;
    cout << "dodawanie:" <<endl;
    cout << x + y << endl;
    cout << "odejmowanie" << endl;
    cout << x - y  << endl;
    std::cout << "mno¿enie" << std::endl;
    cout << x * y <<endl;
    cout << "dzielenie" << endl;
    cout << x / y << endl;

  return 0;
}
