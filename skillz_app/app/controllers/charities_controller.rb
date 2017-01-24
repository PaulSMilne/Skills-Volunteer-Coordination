class CharitiesController < ApplicationController

     private def charity_params
          params.require(:charity).permit([:name, :description])
     end

     def index
          charities = Charity.all
          render :json => charities
     end

     def show
          charity = Charity.find(params[:id])
          render :json => charity
     end

     def create
          charity = Charity.create(charity_params)
          render :json => charity
     end

     def update
          charity = Charity.find(params[:id])
          if charity.update_attributes(charity_params)
               render :json => charity
          else
               render :json => {status: :update_failed}
          end
     end

     def destroy
          charity = Charity.find(params[:id])
          if charity.destroy!
               render :json => {status: :success}
          else
               render :json => {status: :delete_failed}
          end
     end
end