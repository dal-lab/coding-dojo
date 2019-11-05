#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> slice(vector<int> array, int start, int end)
{
    vector<int> temp;
    for(int i = start; i < end; i++) 
    {
        temp.push_back(array[i]);
    }
    return temp;
}

int knumber (vector<int> array, vector<int> command)
{
        // step 2 임시 자료구조인 임시 벡터를 생성한다.
        vector<int> temp;
        temp = slice(array, command[0]-1, command[1]);
        sort(temp.begin(), temp.end());
        
        return temp[command[2]-1];
}

vector<int> solution(vector<int> array, vector<vector<int>> commands)
{
    vector<int> answer;
    // step 1 for문을 돌아서 command의 길이만큼 연산을 수행한다.

    vector<vector<int> >::iterator command_iter;
    for(command_iter = commands.begin(); command_iter != commands.end(); command_iter++)
    {
        // step 3 command의 명령을 읽는다 (*command_iter)
        auto command = *command_iter;
        int n = knumber(array, command);
        answer.push_back(n);
    }
    return answer;
}


int main() {
    assert(knumber({1, 2, 3}, {1, 1, 1}) == 1);
    assert(knumber({1, 2, 3}, {1, 2, 1}) == 1);
    assert(knumber({1, 2, 3}, {1, 2, 2}) == 2);
    assert(slice({1, 5, 2, 6, 3, 7, 4}, {4, 4, 1}) == vector<int>({6}));
    assert(knumber({1, 5, 2, 6, 3, 7, 4}, {4, 4, 1}) == 6);
    return 0;
}
