module ApplicationHelper
  # include MenuHelper
  def format_date datetime
    if datetime.present?
      datetime.to_date.strftime(Setting['format_date']) rescue ''
    end
  end

  def format_date_time(datetime)
    datetime.strftime("#{Setting['format_date']} %I:%M %p") if datetime
  end

  # Renders tabs and their content
  def render_tabs(tabs, selected=params[:tab], tab_name= "tabs-shared")
    if tabs.any?
      unless tabs.detect {|tab| tab[:name] == selected}
        selected = nil
      end
      selected ||= tabs.first[:name]
      render :partial => 'shared/tabs', :locals => {tab_name: tab_name, :tabs => tabs, :selected_tab => selected}
    else
      content_tag 'p', t(:label_no_data), :class => "nodata"
    end
  end

  def edit_user_page_tab
    tabs = [
        {:name => 'core_demographic', :partial => 'devise/registrations/shared/core_demographic', :label => :core_demography},
        {:name => 'password', :partial => 'devise/registrations/shared/password', :label => :password}
    ]
    tabs
  end

  def can_view_submenu?(modules )
    permissions = [:manage_roles]
    modules.each do |m|
      permissions<< "view_#{m}".to_sym
      permissions<< "manage_#{m}".to_sym
    end
    modules.map{|m| module_enabled?(m) }.include?(true) and can?(permissions)
  end

  def checkbox(pdf, flag, x_position = 7, y_position = pdf.cursor - 2)
    pdf.bounding_box([x_position, y_position], width: 10, height: 12) do
      pdf.stroke_bounds
      pdf.text("X", align: :center, valign: :center) if flag
    end
  end

  def can?(*args)
    args.flatten.each do |action|
      return true if current_user.allowed_to?(action)
    end
    false
  end

  def link_to_case(*args)
    links = []
    args.flatten.each do |case_object|
      links<< link_to(case_object.to_s, case_object) if case_object
    end
    links.join('<br/>').html_safe
  rescue Exception =>  e
    ''
  end

  def avatar(user)
    image_tag user.profile_image
  end

  def authoring(created, author, options={})
    t(:label_added_time_by, :author => author, :age => time_tag_value(created)).html_safe
  end

  def link_to_user(user)
    link_to( user.to_s , user) if user
  end

  def time_tag_value(time)
    text = distance_of_time_in_words(Time.now, time)
    content_tag('abbr', text, :title => I18n.l(time))
  end

  def delete_link(url, options={})
    options = {
        :method => :delete,
        :data => {:confirm => t(:text_are_you_sure)}
    }.merge(options)

    link_to "<i class='fa fa-lg fa-trash-o'></i>".html_safe, url, options
  end

  def restore_user_link(user, options={})
    link_to "<i class='fa fa-lg fa-recycle'></i>".html_safe, restore_user_path(user), 'data-turbolinks'=> false
  end

  def lock_user_link(user, options={})
    link_to "<i class='fa fa-lg fa-lock'></i>".html_safe, lock_user_path(user)
  end

  def unlock_user_link(user, options={})
    link_to "<i class='fa fa-lg fa-unlock'></i>".html_safe, unlock_user_path(user)
  end

  def change_password_user_link(user, options={})
    link_to "<i class='fa'>Require Change Password</i>".html_safe, require_change_password_user_path(user)
  end

  def link_to_edit_if_can(text, options)
    url_path = "/#{options[:ctrl]}/#{ options[:object].id}"
    if User.current_user.allowed_to?(controller: options[:ctrl], action: :edit)
      link_to text.presence, "#{url_path}/edit",'data-turbolinks'=> false
    else
      link_to text.presence, url_path, 'data-turbolinks'=> false
    end
  end

  def show_link(object, options={})
    link_to "<i class='fa fa-lg fa-eye'></i>".html_safe, object, options
  end

  def edit_link(url, options={})
    link_to "<i class='fa fa-lg fa-edit'></i>".html_safe, url, options
  end

  def copy_link(url, options={})
    link_to "<i class='fa fa-lg fa-copy'></i>".html_safe, url, options
  end

  def render_employee_information
    output = "<div class='row'>"
    output<< "<div class='col-xs-2 col-sm-2 col-md-2' style='padding:0; top: -4px; margin-left: 5px;' >#{image_tag(User.current.profile_image, size: '35x35', class:'')}</div>"
    output<< "<div class='col-xs-2 col-sm-2 col-md-2' >#{User.current.name}</div>"
    output<< "<div class='col-xs-2 col-sm-2 col-md-2' >#{User.current.gender}</div>"
    output<< "<div class='col-xs-3 col-sm-3 col-md-3' >#{User.current.birthday}</div>"
    output<< "<div class='col-xs-2 col-sm-2 col-md-2' >#{User.current.active?}</div>"
    output<< "</div>"
    output
  end

  def edit_button(url)
    show_button(url, 'Edit', 'edit', 'success')
  end

  def show_button(url, text, icon, btn_style, data_options = {})
    link_to  url, class: "noprint btn btn-#{btn_style}", data: data_options do
      "<i class='fa fa-#{icon}' aria-hidden='true'> #{text} </i>".html_safe
    end
  end

  def delete_button(url)
    link_to( url, class: 'btn btn-danger',
             :method => :delete,
             :data => {:confirm => t(:text_are_you_sure)}) do
      '<i class="fa fa-trash" aria-hidden="true"> Delete</i>'.html_safe
    end
  end

  def cancel_button(url)
    show_button(url, 'Back' , 'arrow-left', 'warning')
  end

  # Renders flash messages
  def render_flash_messages
    s = ''
    flash.each do |k,v|
      s << content_tag('div', v.to_s.html_safe, :class => "flash #{k}", :id => "flash_#{k}") if k != 'timedout'
    end
    s.html_safe
  end

  def options_helper(klass, selected)
    options_for_select(klass.active.pluck(:name, :id), selected: selected )
  end

  # Returns a h2 tag and sets the html title with the given arguments
  def title(*args)
    strings = args.map do |arg|
      if arg.is_a?(Array) && arg.size >= 2
        link_to(*arg)
      else
        h(arg.to_s)
      end
    end
    html_title args.reverse.map {|s| (s.is_a?(Array) ? s.first : s).to_s}
    content_tag('h2', strings.join(' &#187; ').html_safe)
  end

  # Sets the html title
  # Returns the html title when called without arguments
  # Current project name and app_title and automatically appended
  # Exemples:
  #   html_title 'Foo', 'Bar'
  #   html_title # => 'Foo - Bar - My Project - Redmine'
  def html_title(*args)
    if args.empty?
      title = @html_title || []
      title.reject(&:blank?).join(' - ')
    else
      @html_title ||= []
      @html_title += args
    end
  end

  def menu_active?(controller, action= nil)
    if action
      params[:controller] == controller && params[:action] == action ? 'active' : ''
    else
      params[:controller]== controller ? 'active' : ''
    end

  end

  def channel_active?(channel)
    if @channel.try(:id) == channel.id
      'active'
    else
      ''
    end
  end

  # For devise

  def resource_name
    :user
  end

  def resource_class
    User
  end

  def reorder_handle(object, options={})
    data = {
        :reorder_url => options[:url] || url_for(object),
        :reorder_param => options[:param] || object.class.name.underscore
    }
    content_tag('i', '',
                :class => "sort-handle fa fa-sort fa-lg",
                :data => data,
                :title => I18n.t(:label_sort),
                :style => 'cursor: pointer;'
    )
  end

  def resource
    @resource ||= User.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end


  #For extend Demography
  def render_extend_demography_information(extend_demo)
    return if extend_demo.nil?
    output = "<div class='row'>"
    if extend_demo.emails.present?
      output<< "<div class='col-xs-12'> <h4>Email</h4> </div>"
      output<< extend_demo.emails.map{|record| record.to_html }.join('')
    end
    if extend_demo.faxes.present?
      output<< "<div class='col-xs-12'> <h4>Fax</h4> </div>"
      output<< extend_demo.faxes.map{|record| record.to_html }.join('')
    end
    if extend_demo.phones.present?
      output<< "<div class='col-xs-12'> <h4>Phone</h4> </div>"
      output<< extend_demo.phones.map{|record| record.to_html }.join('')
    end
    if extend_demo.identifications.present?
      output<< "<div class='col-xs-12'> <h4>Identification</h4> </div>"
      output<< extend_demo.identifications.map{|record| record.to_html }.join('')
    end
    if extend_demo.social_media.present?
      output<< "<div class='col-xs-12'> <h4>Social media</h4> </div>"
      output<< extend_demo.social_media.map{|record| record.to_html }.join('')
    end
    if extend_demo.addresses.present?
      output<< "<div class='col-xs-12'> <h4>Address</h4> </div>"
      output<< extend_demo.addresses.map{|record| record.to_html }.join('')
    end
    output<< '</div>'
    output.html_safe
  end

  def render_pdf_extend_information(pdf, extend_demo)
    return if extend_demo.nil?
    if extend_demo.emails.present?
      pdf.font_size(15){  pdf.table([[ "Emails"]], :row_colors => ['#D999FF'], :column_widths => [ 523], :cell_style=> {align: :center}) }
      extend_demo.emails.map{|record| record.to_pdf(pdf) }
    end
    if extend_demo.faxes.present?
      pdf.font_size(15){  pdf.table([[ "Faxes"]], :row_colors => ['#D999FF'], :column_widths => [ 523], :cell_style=> {align: :center}) }

      extend_demo.faxes.map{|record| record.to_pdf(pdf) }
    end
    if extend_demo.phones.present?
      pdf.font_size(15){  pdf.table([[ "Phones"]], :row_colors => ['#D999FF'], :column_widths => [ 523], :cell_style=> {align: :center}) }
      extend_demo.phones.map{|record| record.to_pdf(pdf) }
    end
    if extend_demo.identifications.present?
      pdf.font_size(15){  pdf.table([[ "Identifications"]], :row_colors => ['#D999FF'], :column_widths => [ 523], :cell_style=> {align: :center}) }
      extend_demo.identifications.map{|record| record.to_pdf(pdf) }
    end
    if extend_demo.social_media.present?
      pdf.font_size(15){  pdf.table([[ "Social Media"]], :row_colors => ['#D999FF'], :column_widths => [ 523], :cell_style=> {align: :center}) }
      extend_demo.social_media.map{|record| record.to_pdf(pdf) }
    end
    if extend_demo.addresses.present?
      pdf.font_size(15){  pdf.table([[ "Address"]], :row_colors => ['#D999FF'], :column_widths => [ 523], :cell_style=> {align: :center}) }
      extend_demo.addresses.map{|record| record.to_pdf(pdf) }
    end
  end


  def the_chosen_one?( answer, option)
    answer.option_id == option.id ? 'chosen' : nil
  end

  def correct_answer?(answer, option)
    ( answer.option_id == option.id && answer.correct? ) ? 'chosen' : ''
  end

  def get_color_of_option( answer, option)
    if is_quiz?(answer.question.survey.survey_type)
      if option.correct
        'bg-success'
      elsif the_chosen_one?(answer, option)
        'bg-danger'
      end
    elsif is_score?(answer.question.survey.survey_type)
      get_weight_html_class option
    end
  end

  def get_survey_types
    { 0 => 'quiz',
      1 => 'score',
      2 => 'poll' }
  end

  def is_quiz? something
    something == 0 || something == 'quiz'
  end

  def is_score? something
    something == 1 || something == 'score'
  end

  def is_poll? something
    something == 2 || something == 'poll'
  end

  def get_weight option
    return unless is_score?(option.question.survey.survey_type)
    option.weight > 0 ? "(+#{option.weight})" : "(#{option.weight})"
  end

  def number_of_people_who_also_answered option_id
    count = number_of_people_who_also_answered_count(option_id)
    "<span class='number'> #{count} </span> #{'answer'.pluralize}".html_safe
  end

  def number_of_people_who_also_answered_count option_id
    Survey::Answer.where(option_id: option_id).count
  end

  def can_connect_with?(type)
    Setting["#{type}_KEY".upcase].present?
  end

  # TODO use truncate instead  + add truncate html to avoid htmlbugs
  def display_note(note)
    learn_more = "<span class='note_span link_label_more'>#{I18n.t('label_more')}</span>"
    learn_less = "<span class='note_span link_label_less'>#{I18n.t('label_less')}</span>"
    if note.length > 50
      note = "<span class='all_notes'>#{note}...#{learn_less}</span>"+
          "<span class='less_notes'>#{note[0..50]}...#{learn_more}</span>"
    end
    note.html_safe
  end
end
