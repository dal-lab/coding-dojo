package skillTree

fun validSkillTreesCount(
        skillTree: String,
        userSkillTrees: Array<String>
) = userSkillTrees
        .map { it -> it.filter { char -> char in skillTree } }
        .count(isPossibleSkillTree(skillTree))

fun isPossibleSkillTree(skillTree: String): (String) -> Boolean = {
    when {
        it == "" -> true
        skillTree[0] != it[0] -> false
        else -> skillTree.contains(it)
    }
}
