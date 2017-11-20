class Api::ContactsController < ApplicationController
    def index
        @contacts = Contact.all 
   
        render json: @contacts
       end 

    def download
        send_data pdf,
        :filename => "rdJamesResume.pdf",
        :type => "application/pdf"
    end
end
