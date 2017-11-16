class Api::BioController < ApplicationController
    def index
        @bios = Bio.all 
   
        render json: @bios
       end 
end

