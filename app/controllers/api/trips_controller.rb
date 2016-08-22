class Api::TripsController < ApplicationController
  def index
    @trips = Trip.all
      render :json => @trips
  end

  def show
    @trip = Trip.find(params[:id])
    render :json => @trip
  end

  def new
    @trip = Trip.new
  end

  def edit
    @trip = Trip.find(params[:id])
  end

  def create
    @trip = Trip.new(trip_params)

    if @trip.save
      render json: @trip, status: :created
    else
      render json: @trip, status: :unprocessable_entity
    end
  end

  def update
    @trip = Trip.find(params[:id])
    if @trip.update(trip_params)
      render json: @trip
    else
      render json: @trip.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @trip = Trip.find(params[:id])
    if @trip.destroy
      format.json { head :no_content, status: :ok }
    else
      format.json { render json: @trip.errors, status: :unprocessable_entity }
    end
  end


  private
    def trip_params
      params.permit(:location, :start, :end)
    end

end
