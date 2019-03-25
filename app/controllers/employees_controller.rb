class EmployeesController < BaseController
  before_action  :authenticate_user!
  before_action  :set_employee, :only => [:show, :destroy, :log_in, :update]
  before_action  :authorize
  # include UserProfilesHelper
  include ApplicationHelper

  def index
    respond_to do |format|
      format.html{}
      format.json{
        options = Hash.new
        options[:status_type] = params[:status_type]
        render json: EmployeeDatatable.new(view_context,options)
      }
    end
  end

  def show
    redirect_to '/profile_record'
  end

  def new
    # r = Role.where(role_type_id: RoleType.default.try(:id)).first
    @user = User.new()
    # @user.core_demographic = CoreDemographic.new
    # @user.job_detail = JobDetail.new
  end

  def create
    @user = User.new(params.require(:user).permit(employee_params))
    if @user.save
      # UserMailer.welcome_email(@user, params[:user][:password]).deliver_later
      redirect_to users_path
    else
      render 'new'
    end
  end

  def update
    if @employee.update(params.require(:user).permit(User.safe_attributes))
      flash[:notice] = I18n.t('notice_successful_update')
    else
      flash[:error] =  @employee.errors.full_messages.join('<br/>')
    end
    redirect_to employee_path(@employee)
  end

  def destroy
    session[:employee_id] = nil
    # flash[:notice]= "Logged Off from #{@employee.login}"
    redirect_to root_path
  end

  private

  def set_employee
    @employee = User.find params[:id]
    raise Unauthorized if @employee.admin? and !User.current.admin?
  rescue ActiveRecord::RecordNotFound
    render_404
  end

  def authorize
    raise Unauthorized unless User.current.admin?
  end

  def employee_params
   User.safe_attributes
  end

  def random_email(params)
    core_params = params[:user][:core_demographic_attributes] ||  {}
    "#{core_params[:first_name]||'user'}.#{core_params[:last_name]}#{rand(252...4350)}#{User.count}@account.com"
  end
end
