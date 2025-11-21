#include <iostream>
#include <string>

using namespace std;

int main()
{
    int day;
    cout  << "Wpisz Dzieñ tygodnia (1-7): ";
    cin >> day;

    switch (day)
    {
    case 1:
        cout << "Jest Poniedzialek";
        break;
        case 2:
        cout << "Jest Wtorek";
        break;
        case 3:
        cout << "Jest Sroda";
        break;
        case 4:
        cout << "Jest Czwartek";
        break;
        case 5:
        cout << "Jest Piatek";
        break;
        case 6:
        cout << "Jest Sobota";
        break;
        case 7:
        cout <<"Jest Niedziela";
        break;
        default:
            cout << "Nie podano/Blendna liczba";

    }
    return 0;
}

