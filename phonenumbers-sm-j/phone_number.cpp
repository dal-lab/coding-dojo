#include <iostream>
#include <string>
#include <vector>

using namespace std;

bool is_prefix(const string& longer, const string& shorter) {
    auto result = std::mismatch(shorter.begin(), shorter.end(), longer.begin());
    if (result.first == shorter.end()) {
        return true;
    }
    return false;
}

bool solution(vector<string> phone_book) {
    for (auto i = 0; i < phone_book.size() - 1; i++) {
        for (auto j = i+1; j < phone_book.size(); j++) {

            const auto longer = phone_book[i].size() > phone_book[j].size() ? phone_book[i] : phone_book[j];
            const auto shorter = phone_book[i].size() > phone_book[j].size() ? phone_book[j] : phone_book[i];

            if (is_prefix(longer, shorter)) {
                return false;
            }
        }
    }
    return true;
}

int main(){

    assert(solution({"119", "97674223", "1195524421"}) == false);
    assert(solution({"123", "456", "789"}) == true);
    assert(solution({"12", "123", "1235", "567", "88"}) == false);

    return 0;
}
