#include <string>
#include <vector>

bool solution(std::vector<std::string> phone_book) {
    for (const auto first : phone_book) {
        for (const auto second : phone_book) {
            if (first == second) {
                continue;
            }

            const auto longer = first.size() > second.size() ? first : second;
            const auto shorter = first.size() > second.size() ? second : first;

            auto res = std::mismatch(shorter.begin(), shorter.end(), longer.begin());
            if (res.first == shorter.end()) {
                return false;
            }
        }
    }
    return true;
}
