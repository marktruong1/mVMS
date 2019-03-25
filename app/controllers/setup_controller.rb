class SetupController < BaseController
  before_action :authenticate_user!
  def index
    if request.post?
      s = Setting.first || Setting.new
      s.value = params[:value]
      s.save
    end
  end
end
