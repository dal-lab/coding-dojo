ExUnit.start

defmodule Budget do
  def max_number_of_department_we_can_support(total_budget, request_from_departments) do
    func_x(total_budget, request_from_departments, 0)
  end

  def func_x(current_budget, [head], number_of_department) when current_budget >= head do
    number_of_department + 1
  end

  def func_x(_, [_], number_of_department) do
    number_of_department
  end

  def func_x(current_budget, [head | _], number_of_department) when current_budget < head do
    number_of_department
  end

  def func_x(current_budget, [head | tail], number_of_department) do
    func_x(current_budget - head, tail, number_of_department + 1)
  end
end

defmodule BudgetTest do
  use ExUnit.Case

  test "find max number of department we can support" do
    assert Budget.max_number_of_department_we_can_support(9, [1,3,2,5,4]) == 3
    assert Budget.max_number_of_department_we_can_support(10, [2,2,3,3]) == 4

    assert Budget.max_number_of_department_we_can_support(1, [1]) == 1
    assert Budget.max_number_of_department_we_can_support(1, [1, 2]) == 1
  end

  test "inner loop" do
    assert Budget.func_x(0, [1, 2], 0) == 0
    assert Budget.func_x(1, [1, 2], 0) == 1
    assert Budget.func_x(3, [1, 2], 0) == 2
    assert Budget.func_x(1, [1], 0) == 1
  end

end
