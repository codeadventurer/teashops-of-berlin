module Api
  module V1
    class TeashopsController < ApplicationController

      def index
        teashops = Teashop.all

        render json: TeashopsSerializer.new(teashops, options).serialized_json
      end

      def show
        teashop = Teashop.find_by(slug: params[:slug])

        render json: TeashopsSerializer.new(teashop, options).serialized_json
      end

      def create
        teashop = TeashopsController.new(teashop_params)

        if teashop.save
          render json: TeashopsSerializer.new(teashop).serialized_json
        else
          render json: { error: teashop.errors.messages }, status: 422
      end

      def update
        teashop = Teashop.find_by(slug: params[:slug])

        if teashop.update(teashop_params)
          render json: TeashopsSerializer.new(teashop, options).serialized_json
        else
          render json: { error: teashop.errors.messages }, status: 422
      end

      def destroy
        teashop = Teashop.find_by(slug: params[:slug])

        if teashop.destroy
          head :no_content
        else
          render json: { error: teashop.errors.messages }, status: 422
      end

      private

      def teashop_params
        params.require(:teashop).permit(:name, :image_url)
      end

      def options
        @options ||= { include: %i[reviews]}
      end
    end
  end
end