#include <iostream>
#include <string>
#include <vector>

using namespace std;

bool solution(vector<string> phone_book) {
    bool answer = true;

    for(int i = 0; i<phone_book.size(); i++){
        string tmp = phone_book[i];
        for(int j = 0; j<phone_book.size(); j++) {
            answer = tmp.find(phone_book[j]);

            if (answer == false) {
                return  false;
            }
        }
    }
    return answer;
}

int main(){

    // Test case #1
    vector<string> v1;
    v1.push_back("119");
    v1.push_back("97674223");
    v1.push_back("1195524421");

    if (solution(v1) != false) {
        return -1;
    }

    // // Test case #1
    vector<string> v2;
    v2.push_back("123");
    v2.push_back("456");
    v2.push_back("789");
    //123,456,789
    if (solution(v2) != true) {
        return -1;
    }

    // // Test case #1
    vector<string> v3;
    v3.push_back("12");
    v3.push_back("123");
    v3.push_back("1235");
    v3.push_back("567");
    v3.push_back("88");
    if (solution(v3) != false) {
        return -1;
    }

    return 0;
}