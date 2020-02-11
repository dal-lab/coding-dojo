#include <iostream>
#include <string>
using namespace std;

int solution(string input)
{
   int len = input.length();
    for(int i = 0; i < len- 1 ;i++) {
        if( input[i] == input[i + 1]) {
            input.erase(i, 2);
            i -= 2;
            len -= 2;
        }
    }
    if ( len == 0 ) return 1;
    return 0;
}

int main(int argc, const char * argv[]) {
    cout << solution("baabaa")<<endl;

    cout << solution("cdcd")<<endl;
    return 0;
}
