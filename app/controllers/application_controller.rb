class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  around_action :user_time_zone

  private

  def user_time_zone(&block)
    Time.use_zone(Time.zone_default, &block)
  end
end
