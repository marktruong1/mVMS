
   prawn_document(:page_layout => :landscape) do |pdf|
      data = StringIO.new( Base64.decode64(@visitor.avatar.sub('data:image/jpeg;base64', '') ))

      logo_table= pdf.make_table([  [
                                        { :image=> data, image_width: 290, image_height: 350  }
                                    ]],
                                 :column_widths => [290],  :cell_style=> {
              width: 300,
              font_size: 20,
              align: :center,
              padding: [40,5,10,5],
              borders: []

          })

      pdf.table([["<b>MicroHealth, LLC</b>"]], :cell_style=> { size: 60 , :inline_format=> true, align: :center,    width: 720, borders: [:bottom] })



      date_creation_table= pdf.make_table([
                                              ["#{@visitor.name}"],
                                              ["Destination:"],
                                              ["#{@visitor.last_visit.person.try(:name)}"],
                                              ["#{@visitor.last_visit.sign_in_date.strftime('%d, %B %Y')}"],
                                              ["Time: #{@visitor.last_visit.sign_in_date.strftime('%I:%M %p')}"],

                                          ],
                                          :column_widths => [420], :cell_style=> {
              width: 420,
              size: 48,
              align: :left,
              font_style: :italic,
              borders: [],
              padding: [24,0,0,30]
          })



      pdf.table([
                    [
                        logo_table,
                        date_creation_table

                    ]
                ],
                :column_widths => [300, 430],
                :cell_style=> {
                    align: :center,
                    borders: []
                })

      pdf.autoprint
    end
