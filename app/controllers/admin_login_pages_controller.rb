class AdminLoginPagesController < BaseController
  def index
    @page_content = AdminLoginPage.first
  end

  def update
    page_content = AdminLoginPage.first
    page_content.section_1_image = params[:section_1_image]
    page_content.section_1_body = params[:section_1_body]
    page_content.section_1_file = params[:section_1_file]
    page_content.section_2_image = params[:section_2_image]
    page_content.section_3_title = params[:section_3_title]
    page_content.section_3_body = params[:section_3_body]
    page_content.section_4_title = params[:section_4_title]
    page_content.section_4_body = params[:section_4_body]

    if page_content.save
      redirect_back(fallback_location: root_path, notice: 'Update success!')
    else
      redirect_back(fallback_location: root_path, alert: 'Update failed!')
    end
  end
end
