ExUnit.start

defmodule Budget do
  def max_number_of_department_we_can_support(total_budget, request_from_departments) do
    func_x(total_budget, request_from_departments, 0)
  end

  def func_x(total_budget, request_from_departments, acc) do
    if Enum.count(request_from_departments) == 1 do

      [head] = request_from_departments
      if total_budget >= head do
        acc + 1
      else
        acc
      end

    else

      [head | tail] = request_from_departments
      if total_budget < head do
        acc
      else
        func_x(total_budget - head, tail, acc + 1)
      end
    end

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
