#include <iostream>
#include <string>

using namespace std;

int main ()
{
    string imie;
    string nazwisko;
    int wiek;
    int nrTel;
    string mail;
    cout << "Podaj dane:" << endl;
    cout << "Imie: ";
    getline(cin,imie);
    cout << "Nazwisko: ";
    getline(cin,nazwisko);
    cout << "Wiek: ";
    cin >> wiek;
    cout << "Numer telefonu: ";
    cin >> nrTel;

    cout << "Dane: Imie: " << imie << " " << "Nazwisko: " << nazwisko << " " << "Wiek: " << wiek << " " << "Numer telefonu: " << nrTel;

    return 0;
}
