require 'test_helper'

class VisitorLogControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get visitor_log_index_url
    assert_response :success
  end

end
