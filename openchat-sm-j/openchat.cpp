#include <string>
#include <vector>
#include <bits/stdc++.h> 
#include <map>
#include <utility>
#include <iostream>
using namespace std;

vector<string> GetWords(string str) 
{ 
    vector<string> result;
    istringstream ss(str); 
    do { 
        string word; 
        ss >> word; 
        result.push_back(word); 
    } while (ss); 
    
    return result;
} 

vector<string> solution(vector<string> record) {
    vector<string> answer;
    map<string, string> userInfo;
    vector<pair<string, bool>> userIO;
    
    for(auto& rec: record){
        vector<string> result = GetWords(rec);
        if (result[0] == "Enter"){
            userInfo[result[1]] = result[2];
            userIO.push_back(make_pair(result[1],true));
        }
        else if (result[0] == "Leave"){
            userIO.push_back(make_pair(result[1],false));
        }
        else if (result[0] == "Change"){
            userInfo[result[1]] = result[2];
        }
    }
    
    for(auto& res: userIO){
        if (res.second){
            answer.push_back(userInfo[res.first]+"님이 들어왔습니다.");
        }
        else{
            answer.push_back(userInfo[res.first]+"님이 나갔습니다.");
        }
    }
    
    return answer;
}