class BaseController <ApplicationController
  # protect_from_forgery with: :exception
  layout 'base'
  before_action :set_user
  def set_user
    if user_signed_in?
      User.current = current_user
    end
  rescue ActiveRecord::RecordNotFound
    render_404
  end
end
