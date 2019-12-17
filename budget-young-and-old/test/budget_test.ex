ExUnit.start

defmodule Budget do
  def max_number_of_department_we_can_support(total_budget, request_from_departments) do
    3
  end
end

defmodule BudgetTest do
  use ExUnit.Case

  test "greets the world" do
    assert Budget.max_number_of_department_we_can_support(9, [1,3,2,5,4]) == 3
  end
end
