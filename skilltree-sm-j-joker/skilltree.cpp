#include <string>
#include <vector>
#include <map>
#include <algorithm>
#include <functional>
#include <iostream>
#include <cassert>

using namespace std;
using namespace std::placeholders;

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

bool learn_skill(string skill_tree, char skill, vector<bool>& learned) {
	size_t pos = skill_tree.find(skill);
	if (pos == string::npos) {
		return true;
	}
	if (pos > 0 && !learned[pos - 1]) {
		return false;
	}

	learned[pos] = true;
	return true;
}

bool check_skills(string skill_tree, string skills) {
	vector<bool> learned('Z' - 'A' + 1);
	for (size_t i = 0; i < skills.size(); i++) {
		if (!learn_skill(skill_tree, skills[i], learned)) {
			return false;
		}
	}
	return true;
}

int solution(string skill_tree, vector<string> skillses) {
	return count_if(skillses.begin(), skillses.end(),
		bind(check_skills, skill_tree, _1));
	//return count_if(skillses.begin(), skillses.end(),
	//	[=](auto skills) { return check_skills(skill_tree, skills); });
}

int main() {
	assert_equal(2, solution("CBD", { "BACDE", "CBADF", "AECB", "BDA" }));
	assert_equal(false, check_skills("CBD", "BACDE"));
	assert_equal(true, check_skills("CBD", "CBADF"));
	assert_equal(true, check_skills("CBD", "AECB"));
	assert_equal(true, check_skills("CBD", "CBD"));
	return 0;
}
