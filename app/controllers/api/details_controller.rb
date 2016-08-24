class Api::DetailsController < ApplicationController
  def index
    @details = Detail.all
      render :json => @details
  end

  def show

  end

  def new
    @detail = Detail.new
  end

  def edit
    @detail = Detail.find(params[:id])
  end

  def create
    @detail = Detail.new(detail_params)

    if @detail.save
      render json: @detail, status: :created
    else
      render json: @detail, status: :unprocessable_entity
    end
  end

  def update
    @detail = Detail.find(params[:id])
    if @detail.update(detail_params)
      render json: @detail
    else
      render json: @detail.errors, status: :unprocessable_entity
    end
  end

  def destroy
    Detail.delete(params[:id])
    @details = Detail.all
    render json: @details
  end


  private
    def detail_params
      params.require(:detail).permit(:title)
    end

end
