require 'test_helper'

class ReasonsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reason = reasons(:one)
  end

  test "should get index" do
    get reasons_url
    assert_response :success
  end

  test "should get new" do
    get new_reason_url
    assert_response :success
  end

  test "should create reason" do
    assert_difference('Reason.count') do
      post reasons_url, params: { reason: { name: @reason.name } }
    end

    assert_redirected_to reason_url(Reason.last)
  end

  test "should show reason" do
    get reason_url(@reason)
    assert_response :success
  end

  test "should get edit" do
    get edit_reason_url(@reason)
    assert_response :success
  end

  test "should update reason" do
    patch reason_url(@reason), params: { reason: { name: @reason.name } }
    assert_redirected_to reason_url(@reason)
  end

  test "should destroy reason" do
    assert_difference('Reason.count', -1) do
      delete reason_url(@reason)
    end

    assert_redirected_to reasons_url
  end
end
