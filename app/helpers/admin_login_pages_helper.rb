module AdminLoginPagesHelper
    def section_1_image(page_content)
      page_content.section_1_image.blank? ? '/images/microhealth-logo.svg' : page_content&.section_1_image&.url
    end
  
    def section_2_image(page_content)
      page_content.section_2_image.blank? ? '/images/micro-health-icon.png' : page_content&.section_2_image&.url
    end
end