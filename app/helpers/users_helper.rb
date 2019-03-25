module UsersHelper
  def password_min
    User.password_length.min
  end

  def password_max
    User.password_length.max
  end

  def user_admin_show_page
    tabs = [
        {:name => 'user_basic', :partial => 'users/shared/user_basic_information', :label => :user_basic_information},
        {:name => 'password', :partial => 'users/shared/password', :label => :password}
     ]
    tabs
  end

end
