#include <string>
#include <vector>
#include <map>
#include <iostream>
#include <cassert>
#include "ConsoleApplication1.h"

using namespace std;

#define assert_equal(expected, actual) \
	_assert_equal(__LINE__, expected, actual)

void _assert_equal(int line, int expected, int actual) {
	if (expected == actual) {
		return;
	}

	cout << "NOT EQUAL(" << line << ")" << endl
		<< "expected: " << expected << endl
		<< "actual: " << actual << endl;
}

bool check_skills(string skill_tree, string skills) {
	vector<bool> learned('Z' - 'A' + 1);
	for (size_t i = 0; i < skills.size(); i++) {
		size_t pos = skill_tree.find(skills[i]);
		if (pos == string::npos) {
			continue;
		}
		if (pos > 0) {
			if (!learned[pos - 1]) {
				return false;
			}
		}
		learned[pos] = true;
	}
	return true;
}

int solution(string skill_tree, vector<string> skillses) {
	int answer = 0;
	for (size_t i = 0; i < skillses.size(); i++) {
		if (check_skills(skill_tree, skillses[i])) {
			answer++;
		}
	}
	return answer;
}

int main() {
	assert_equal(2, solution("CBD", { "BACDE", "CBADF", "AECB", "BDA" }));
	assert_equal(false, check_skills("CBD", "BACDE"));
	assert_equal(true, check_skills("CBD", "CBADF"));
	assert_equal(true, check_skills("CBD", "AECB"));
	assert_equal(true, check_skills("CBD", "CBD"));
	return 0;
}
