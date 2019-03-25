prawn_document(:page_layout => :portrait) do |pdf|
  User.current.to_pdf_organization(pdf)
  @employee.to_pdf( pdf)
  pdf.move_down 10
  render 'extend_demographies/show', :pdf=> pdf, extend_information: @employee.extend_informations


   pdf.start_new_page  if @employee.jsignatures.present?
    @employee.jsignatures.each do |object|
       object.to_pdf(pdf, "Release of Information")
       pdf.move_down 20
     end
 pdf.start_new_page  if @employee.related_clients.present?
    @employee.related_clients.each do |object|
       object.to_pdf(pdf)
       pdf.move_down 20
     end

end