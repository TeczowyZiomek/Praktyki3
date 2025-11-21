#include <iostream>
#include <string>

using namespace std;

int main()
{
    int czas;
    string imie;
    cout << "Podaj imie: ";
    cin >> imie;
    cout << "Podaj godzine: ";
    cin  >> czas;

    if (czas < 12)
    {
        cout << "Milego poranka " << imie;
    } else if (czas < 19)
    {
       cout << "Dzien dobry " << imie;
    } else
    {
        cout << "Dobry wieczor " << imie;
    }

}
