require 'test_helper'

class CharityTest < ActiveSupport::TestCase
     test "Charities have names" do
          assert_equal("Wild Scotland", charities(:one).name)
     end

     test "Charity has a description" do
          assert_equal("Promoting wildlife and caretaking nature reserves.", charities(:one).description)
     end
end
